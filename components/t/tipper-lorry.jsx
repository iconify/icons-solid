import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzjso_7pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzjso_7pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tipper-lorry"} {...others} />);
}

export default Component;
