import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifu7oub2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ifu7oub2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:text-formating-subscript"} {...others} />);
}

export default Component;
