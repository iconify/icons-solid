import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnx5z5buf.css';
import '../../css/q/qhqeaxbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnx5z5buf"/><path class="qhqeaxbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-plus-fill"} {...others} />);
}

export default Component;
