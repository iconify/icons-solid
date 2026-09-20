import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i8sx_kbfb {
  fill: var(--svg-color--441f67, #441f67);
  d: path("M4.385 3h3.461v6.923h8.308V3h3.462v18h-3.462v-7.615H7.846V21H4.385z");
}
</style><path class="i8sx_kbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:hard"} {...others} />);
}

export default Component;
