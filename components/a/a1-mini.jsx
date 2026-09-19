import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trw6j0drs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trw6j0drs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:a1-mini"} {...others} />);
}

export default Component;
