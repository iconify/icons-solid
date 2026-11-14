import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uk-t90bsc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.782 4.532h4.072q.917-.001 1.268.847q.35.848-.3 1.495q-.529.53.001 1.06l4.243 4.243q.53.53 1.061 0q.646-.649 1.494-.299t.847 1.269v4.071q0 2.25-2.25 2.25h-4.072q-.917.001-1.268-.847q-.35-.848.3-1.495q.529-.53-.001-1.06l-4.243-4.243q-.53-.53-1.061 0q-.646.649-1.494.299t-.847-1.269V6.782q0-2.25 2.25-2.25");
}
</style><path class="uk-t90bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cursor-resize-diagonal"} {...others} />);
}

export default Component;
