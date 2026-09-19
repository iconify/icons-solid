import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_jbq913j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_jbq913j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:dot-05-xl"} {...others} />);
}

export default Component;
