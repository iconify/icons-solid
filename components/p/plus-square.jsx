import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf1fo6loa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qf1fo6loa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:plus-square"} {...others} />);
}

export default Component;
