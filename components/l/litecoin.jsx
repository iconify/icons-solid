import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.si5fikblj {
  fill: var(--svg-color--345d9d, #345d9d);
  d: path("m5.734 15.611l-1.609.63l.776-3.116l1.62-.652L8.86 3h5.772l-1.71 6.975l1.586-.642l-.765 3.083l-1.598.653l-.956 4.074h8.685L18.896 21H4.406z");
}
</style><path class="si5fikblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:litecoin"} {...others} />);
}

export default Component;
