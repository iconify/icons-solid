import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc8hk8p9a.css';
import '../../css/v/v2dcsq4ql.css';
import '../../css/q/qijs0vb1u.css';
import '../../css/d/dygy2qbml.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="qc8hk8p9a"/><circle class="v2dcsq4ql"/><circle class="qijs0vb1u"/><path class="dygy2qbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:gui"} {...others} />);
}

export default Component;
