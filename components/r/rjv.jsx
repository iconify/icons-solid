import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7-qibxg.css';
import '../../css/h/hnbhowbuh.css';
import '../../css/h/hcdg4pudd.css';
import '../../css/g/gqt_qvbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="az7-qibxg"/><path class="hnbhowbuh"/><path class="hcdg4pudd"/><path class="gqt_qvbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rjv"} {...others} />);
}

export default Component;
