import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea3ri1q9g {
  fill: currentColor;
  d: path("m12.9 21l-2.85-7.05L3 11.1V9.7L21 3l-6.7 18z");
}
</style><path class="ea3ri1q9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:near-me"} {...others} />);
}

export default Component;
