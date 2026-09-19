import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jabs6t4yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jabs6t4yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:moes-4way"} {...others} />);
}

export default Component;
