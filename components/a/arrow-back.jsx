import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxqr7tbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxqr7tbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:arrow-back"} {...others} />);
}

export default Component;
