import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.icxlooygs {
  fill: currentColor;
  d: path("M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z");
}
</style><path class="icxlooygs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-navigation"} {...others} />);
}

export default Component;
