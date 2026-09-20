import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zscx8ccup.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zscx8ccup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:thumbtack"} {...others} />);
}

export default Component;
