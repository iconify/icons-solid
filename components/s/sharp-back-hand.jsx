import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jnufz5xam {
  fill: currentColor;
  d: path("M2.21 10.47L5 9.36L7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8c-3.26 0-6.19-1.99-7.4-5.02z");
}
</style><path class="jnufz5xam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-back-hand"} {...others} />);
}

export default Component;
