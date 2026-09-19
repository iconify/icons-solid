import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv8w_-9rs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gv8w_-9rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:email-edit-filled"} {...others} />);
}

export default Component;
