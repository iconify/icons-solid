import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whpitybyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whpitybyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-reload-02"} {...others} />);
}

export default Component;
