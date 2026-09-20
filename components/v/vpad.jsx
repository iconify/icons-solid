import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqtu10b0n {
  fill: var(--svg-color--68ffd2, #68ffd2);
  fill-rule: evenodd;
  d: path("m3 4.125l9 15.75l9-15.75zm4.972 2.812L9.384 9.57l-1.322 1.867h2.402L12 14.25l3.853-7.313z");
}
</style><path clip-rule="evenodd" class="dqtu10b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vpad"} {...others} />);
}

export default Component;
