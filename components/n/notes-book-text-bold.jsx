import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxhblib2y.css';
import '../../css/e/e92p4ac2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxhblib2y"/><path class="e92p4ac2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:notes-book-text-bold"} {...others} />);
}

export default Component;
