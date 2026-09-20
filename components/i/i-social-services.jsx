import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m85fekbws.css';
import '../../css/z/z6n_ozb8v.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="m85fekbws"/><path class="z6n_ozb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-social-services"} {...others} />);
}

export default Component;
