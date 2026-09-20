import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmf6dbc6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmf6dbc6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:mobile-signal-one"} {...others} />);
}

export default Component;
