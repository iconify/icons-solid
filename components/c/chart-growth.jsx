import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7f-2pkdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7f-2pkdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:chart-growth"} {...others} />);
}

export default Component;
