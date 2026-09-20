import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k889x9ems.css';
import '../../css/h/h9m_z6b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k889x9ems"/><path class="h9m_z6b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:badge-verified"} {...others} />);
}

export default Component;
