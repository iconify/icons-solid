import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hbxvoqnik {
  fill: currentColor;
  d: path("M8 16h8V8h-3.5q-.421 0-.71.29q-.29.289-.29.71v2.07q-.23.12-.404.344q-.173.223-.173.586q0 .46.299.768q.3.309.778.309q.421 0 .749-.309t.328-.768q0-.363-.179-.586q-.179-.224-.398-.345V9H15v6H9V9h1V8H8zm-4 4V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="hbxvoqnik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nfc-outline-sharp"} {...others} />);
}

export default Component;
