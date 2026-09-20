import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q953-nbum.css';
import '../../css/u/u9-d979uw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary q953-nbum"/><path class="u9-d979uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-sql"} {...others} />);
}

export default Component;
