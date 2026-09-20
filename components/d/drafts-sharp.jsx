import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjm-_2b4a {
  fill: currentColor;
  d: path("m12 1l10 5.975V21H2V6.975zm0 11.65L19.8 8L12 3.35L4.2 8z");
}
</style><path class="mjm-_2b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drafts-sharp"} {...others} />);
}

export default Component;
