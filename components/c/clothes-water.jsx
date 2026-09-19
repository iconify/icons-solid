import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5jd9e2qv.css';

const viewBox = {"width":520,"height":512};
const content = `<path class="h5jd9e2qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:clothes-water"} {...others} />);
}

export default Component;
