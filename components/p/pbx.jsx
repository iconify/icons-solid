import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo6-r_b9m.css';
import '../../css/s/sjw8w__rs.css';
import '../../css/c/c_4mldkyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo6-r_b9m"/><path class="sjw8w__rs"/><path class="c_4mldkyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pbx"} {...others} />);
}

export default Component;
