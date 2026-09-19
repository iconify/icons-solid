import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw3q3-91j.css';
import '../../css/z/zo8llxvbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cw3q3-91j duoicon-secondary-layer"/><path class="duoicon-primary-layer zo8llxvbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:campground"} {...others} />);
}

export default Component;
