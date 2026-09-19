import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9af1acuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h9af1acuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:layout-kanban"} {...others} />);
}

export default Component;
