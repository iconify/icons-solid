import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcx7mn54s.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-2};
const content = `<path class="kcx7mn54s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:calculator"} {...others} />);
}

export default Component;
