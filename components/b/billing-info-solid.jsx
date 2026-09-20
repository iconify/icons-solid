import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcsyndb6q.css';
import '../../css/k/kzh5-ccpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcsyndb6q"/><path class="kzh5-ccpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:billing-info-solid"} {...others} />);
}

export default Component;
