import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9gsl6b1j.css';
import '../../css/v/vb6su3tol.css';
import '../../css/k/k1xtew5eb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9gsl6b1j"/><path class="vb6su3tol"/><path class="k1xtew5eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:database"} {...others} />);
}

export default Component;
