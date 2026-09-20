import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":151};
const content = `<style>.evfz3ob1k {
  fill: var(--svg-color--10e7ff, #10E7FF);
  d: path("m256 0l-91.429 150.862l-18.969-31.219L217.61 0H256ZM47.204 0l44.674 73.367L136.53 0h45.365L90.947 150.068L0 0h47.204Z");
}
</style><path class="evfz3ob1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:vector-timber"} {...others} />);
}

export default Component;
