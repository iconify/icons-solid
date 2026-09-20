import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":384};
const content = `<style>.cm1oe6iah {
  d: path("M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z");
}
</style><path class="cm1oe6iah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:framer"} {...others} />);
}

export default Component;
