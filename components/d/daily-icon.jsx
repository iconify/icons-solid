import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":301};
const content = `<style>.z7kz7tbxp {
  d: path("M0 300.931V217.94L108.451 0H256v83.029L147.603 300.931z");
}
</style><path class="z7kz7tbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:daily-icon"} {...others} />);
}

export default Component;
