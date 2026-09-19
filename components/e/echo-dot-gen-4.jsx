import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh4duubkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh4duubkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:echo-dot-gen-4"} {...others} />);
}

export default Component;
