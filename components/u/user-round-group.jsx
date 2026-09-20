import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlk-77-cy.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/l/lk387obkc.css';
import '../../css/y/yk80oac5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mlk-77-cy"/><circle class="fr_tmn9fp"/><circle class="lk387obkc"/><circle class="yk80oac5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round-group"} {...others} />);
}

export default Component;
