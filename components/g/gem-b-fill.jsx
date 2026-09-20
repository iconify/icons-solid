import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3nrn22hp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3nrn22hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-b-fill"} {...others} />);
}

export default Component;
