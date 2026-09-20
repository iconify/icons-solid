import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q53hz-bxg.css';
import '../../css/z/z8ovlk4ie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q53hz-bxg"/><path class="z8ovlk4ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:credit-card"} {...others} />);
}

export default Component;
