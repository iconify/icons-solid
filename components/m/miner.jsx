import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m8favlk8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.369 11.213v25.574m2.014-1.162V12.372m2.014 22.086V13.539m2.014 19.758V14.7m2.013 17.437V15.861m2.014 15.108V17.028m2.014 12.781V18.188m2.013 10.46v-9.299m2.014 8.132v-6.965m2.014 5.804v-4.643m2.007 3.482v-2.321m-26.863-7.109H8.546L4.5 19.757v17.03h16.182v-17.03z");
}
</style><path class="m8favlk8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:miner"} {...others} />);
}

export default Component;
