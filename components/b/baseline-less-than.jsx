import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.smqyzi5gq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z");
}
</style><path class="smqyzi5gq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-less-than"} {...others} />);
}

export default Component;
