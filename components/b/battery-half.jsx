import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o64o7ab6t.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="o64o7ab6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:battery-half"} {...others} />);
}

export default Component;
