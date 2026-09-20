import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bee52pb2u.css';
import '../../css/y/yl1bn7evw.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="bee52pb2u"/><path class="yl1bn7evw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:add-1d"} {...others} />);
}

export default Component;
