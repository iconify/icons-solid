import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csyah5ukg.css';
import '../../css/o/ou22v7n3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csyah5ukg"/><path class="ou22v7n3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrowhead-up-fill"} {...others} />);
}

export default Component;
