import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wyc2zrbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.474 24.432l-6.86-11.964m-2.809 17.507l-2.008 3.462c-1.625 2.802-5.673 2.791-7.284-.018L4.5 12.468h35.228L43.5 18.89l-8.437 14.546c-1.624 2.802-5.673 2.791-7.284-.018l-12.011-20.95");
}
</style><path class="wyc2zrbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:western-union"} {...others} />);
}

export default Component;
