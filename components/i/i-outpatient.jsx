import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqbik8bfl.css';
import '../../css/y/y3bjwfy8q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="eqbik8bfl"/><path class="y3bjwfy8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-outpatient"} {...others} />);
}

export default Component;
