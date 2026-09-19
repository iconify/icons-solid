import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu7me6ans.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu7me6ans"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:octpus"} {...others} />);
}

export default Component;
