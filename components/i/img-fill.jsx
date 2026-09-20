import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1kfdbb0u.css';
import '../../css/l/lieqa6bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="q1kfdbb0u"/><path class="lieqa6bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-fill"} {...others} />);
}

export default Component;
