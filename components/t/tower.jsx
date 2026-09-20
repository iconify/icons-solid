import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7rqscvfd {
  d: path("m16.235 3l-.314 1.588h-2.489L13.059 3H10.94l-.283 1.588H8.08L7.815 3H5.647l.53 4.765h11.647L18.353 3zM6.176 8.294l.773 8.258L11.991 21l.009-.05l.009.05l5.042-4.448l.773-8.258zm1.589 2.118h3.176v7.676l-2.647-2.382zm5.294 7.676v-7.676h3.176l-.53 5.294z");
}
</style><path class="d7rqscvfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:tower"} {...others} />);
}

export default Component;
