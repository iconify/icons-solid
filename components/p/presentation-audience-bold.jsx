import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzuqjj_tm.css';
import '../../css/j/jn7afdxga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzuqjj_tm"/><path class="jn7afdxga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:presentation-audience-bold"} {...others} />);
}

export default Component;
