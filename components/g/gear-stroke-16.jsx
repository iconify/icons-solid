import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8qpv3buc.css';
import '../../css/a/ab4vmibnv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o8qpv3buc"/><circle class="ab4vmibnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:gear-stroke-16"} {...others} />);
}

export default Component;
