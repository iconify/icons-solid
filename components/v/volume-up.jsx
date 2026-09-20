import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il2cuacvw.css';

const viewBox = {"width":24,"height":24,"top":-3};
const content = `<path class="il2cuacvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:volume-up"} {...others} />);
}

export default Component;
